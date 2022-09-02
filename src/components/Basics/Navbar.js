import React from 'react'

function Navbar(props) {
    const { filteritem, menulist } = props;
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {
                        menulist.map((curElem) => {
                            console.log("Nav",curElem)
                            return (
                                <button className="btn-group__item" onClick={() => filteritem(curElem)}>{curElem}</button>
                            )
                        })
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar