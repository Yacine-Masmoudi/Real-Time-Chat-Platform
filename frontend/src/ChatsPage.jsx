import {PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) => {

    return (
    <div style={{height:'100vh'}}>   
    <PrettyChatWindow
        projectId='8dd972e1-e438-4a46-a06c-eb906c982e31
'
        username={props.user.username}
        secret={props.user.secret}
        style={{height : '100%'}}
    ></PrettyChatWindow>
       
    </div>
    )
}
export default ChatsPage