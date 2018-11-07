import _ from "lodash"
import printMe from './print'
import './styles.css'

function component() {
    var element = document.createElement('div')
    var btn = document.createElement('button')

    // lodash 由脚本引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    btn.innerHTML = 'Click me and check the console!!'
    btn.onclick = printMe

    element.appendChild(btn)

    return element
}

document.body.appendChild(component())