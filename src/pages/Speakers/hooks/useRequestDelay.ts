import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

const useRequestDelay = (delayTime = 1000, initialData:any = []) => {
  const [data, setData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const delayFunc = async () => {
      try {
        await delay(delayTime);
        //throw "Had Error."
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(initialData);
      } catch (e: any) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }
    }
    delayFunc();
  }, [delayTime, initialData]);

  const updateRecord = (recordUpdated: any, callBack: any) => {
    const originalRecords = [...data];
    const newRecords: any = data.map(function (rec: any) {
      return rec.id === recordUpdated.id ? recordUpdated : rec;
    });

    const delayFunction = async () => {
      try {
        setData(newRecords);
        await delay(delayTime);
        if(callBack) {
          callBack();
        }
      } catch (error) {
        console.log("error thrown inside delayFunction", error);
        if(callBack) {
          callBack();
        }
        setData(originalRecords);
      }
    }
    delayFunction();
  }

  return {
    data,
    requestStatus,
    error,
    updateRecord,
  };
}

export default useRequestDelay;