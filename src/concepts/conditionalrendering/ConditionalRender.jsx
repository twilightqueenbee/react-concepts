const ConditionalRendering = () => {
    //!What is Conditional rendering?
    // It helps to render a component or element based on a condition.

    let value = true
    // return (
    //     <div>
    //     ConditionalRendering
    //     </div>
    // )
    
    //! if...else
    if(value)
    {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
    else
    {
        return(
            <div>
                <h1>Bye</h1>
            </div>
        )
    }
}
 export default ConditionalRendering