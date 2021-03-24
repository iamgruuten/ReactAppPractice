import { ListGroup, ListGroupItem } from 'reactstrap'

const userLists = ({users}) => {
    console.log('data', users)
    return (
        <ListGroup>
            {
                users.map((user) => {
                    return <ListGroupItem key={user.id}>{user.firstName}</ListGroupItem>
                })
            }
        </ListGroup>
    )
}


export default userLists;