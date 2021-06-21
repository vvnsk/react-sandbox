// Usage
/*********************************
 * const EventYearsSelect = ({eventYears}) => {
 * // event years is available
 * }
 * export default withEventYears(2019)(EventYearsSelect)
 *********************************/

const withEventYears = (maxYear: number) => {
    return (Component: any) => {
        const eventYears = [
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
          ];
          return () => {
              const limitYears = eventYears.filter(year => parseInt(year) <= maxYear);
              <Component eventYears={limitYears} />
          }
    }
}

export default withEventYears;