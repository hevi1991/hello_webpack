import _ from "lodash"
import './style.css'
import Pic from './cat.jpg'
import Data from './data.xml'

function component() {
    var element = document.createElement('div')

    // lodash 由脚本引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    // 引入css
    element.classList.add('hello')

    // 引入图片
    const myPic = new Image()
    myPic.src = Pic
    element.appendChild(myPic)

    // 输入解析后的xml
    console.log(Data)

    return element
}

document.body.appendChild(component())