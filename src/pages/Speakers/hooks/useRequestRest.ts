import axios from "axios";
import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

const baseUrl = "http://localhost:8080/speakers";

const useRequestRest = () => {
  const [data, setData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  useEffect(() => {
    const delayFunc = async () => {
      try {
        const result: any = await axios.get(baseUrl);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(result.data);
      } catch (e: any) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }
    }
    delayFunc();
  }, []);

  const updateRecord = (record: any, callBack: any) => {
    const originalRecords = [...data];
    const newRecords: any = data.map((rec: any) => {
      return rec.id === record.id ? record : rec;
    });

    const delayFunction = async () => {
      try {
        setData(newRecords);
        await axios.put(`${baseUrl}/${record.id}`, record);
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

  const insertRecord = (record: any, callBack: any) => {
    const originalRecords = [...data];
    const newRecords: any = [record, ...data]

    const delayFunction = async () => {
      try {
        setData(newRecords);
        await axios.post(baseUrl, record);
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

  const deleteRecord = (record: any, callBack: any) => {
    const originalRecords = [...data];
    const newRecords: any = data.filter((rec: any) => rec.id !== record.id);

    const delayFunction = async () => {
      try {
        setData(newRecords);
        await axios.delete(`${baseUrl}/${record.id}`, record);
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
    insertRecord,
    deleteRecord
  };
}

export default useRequestRest;