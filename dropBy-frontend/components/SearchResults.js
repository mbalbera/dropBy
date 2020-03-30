import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

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
                    <ScrollView style={{ listStyle: 'none' }}>
                        <Text onClick={(event) => this.props.onChosen(event)}>{s}</Text>
                    </ScrollView>
                )
            }
        }
        return (
            <View style={{ borderStyle: 'outset' }}>
                {all.length > 0 ? all : <Text>Try a different search word</Text>}
            </View>
        )
        
    }
}
export default Dropdown