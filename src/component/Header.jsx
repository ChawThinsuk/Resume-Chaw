import React from "react"
function Header () {
    return (
        <div className="flex flex-row justify-between">
            <div className="bg-red-500">Logo</div>
            <div className="flex flex-row">
                <p>About</p>
                <p>Passions</p>
                <p>Portfolio</p>
                <button className="bg={#608AF5}">Contact Me</button>
            </div>
        </div>
    )
}
export default Header;