import React from 'react'

const dictionary = ["a","b","c"]

class Dropdown extends React.Component {

    state = {
        hov: false,
        dict2: []
    }

    toggleHover() {
        this.setState({ hov: !this.state.hover })
    }

    render() {
        let all = []
        if (this.props.typed.length !== 0) {
            let selected = []
            dictionary.forEach(word => {
                if (word.includes(this.props.typed)) {
                    selected.push(word)
                }

            })
            if (selected.length > 0) {
                all = selected.slice(0, 5).map(s =>
                    <ul style={{ listStyle: 'none' }}>
                        <li onClick={(event) => this.props.onChosen(event)}>{s}</li>
                    </ul>
                )
            }
        }
        if (all.length > 0) {
            return (
                <div style={{ borderStyle: 'outset' }}>
                    {all}
                </div>
            )
        } else {
            return (
                null
            )
        }
    }
}
export default Dropdown