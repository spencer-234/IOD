const Greeting = ({name, children}) => {
    return (
        <>
            <span>Hello {children ? children.name : name ? name : "World"}</span>
        </>
    )
}

export default Greeting;