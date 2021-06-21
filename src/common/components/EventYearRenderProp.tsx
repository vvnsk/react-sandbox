// Usage
/*********************************
 * <EventYearPenderProp>
 *  {
 *      ({eventYears}) => (
 *          <div>{eventYears.length}</div>
 *      ))
 *  }
 * </EventYearPenderProp>
 *********************************/

const EventYearRenderProp = (props: any) => {
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
    return props.children({
        eventYears
    })
}

export default EventYearRenderProp;