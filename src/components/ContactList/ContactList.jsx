import React, {Component} from "react"
import ContactItem from "../ContactItem"
import PropTypes, { arrayOf } from "prop-types"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import "./ContactList.css"
import { connect } from "react-redux"
import contactsActions from "../../redux/contacts/contactsActions"


class ContactList extends Component {

  componentDidMount(){
    this.props.onSaveContact()
  }

componentDidUpdate(prevProps, prevState){
  return (this.props.contacts?localStorage.setItem('contacts', JSON.stringify(this.props.contacts)):[])
}

render(){
  return (
    <TransitionGroup component="ul" className="ContactList">
      {this.props.contacts.map((item) => (
        <CSSTransition
          key={item.id}
          timeout={250}
          classNames="ContactList-item-slide"
        >
          <ContactItem
            contact={item}
            onRemoveContact={() => this.props.onRemoveContact(item.id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

}
const mapStateToProps = (state) => {
  const { items, filter } = state.contacts
  const filteredContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )

  return { contacts: filteredContacts }
}

const mapDispatchToProps = {
  onRemoveContact: contactsActions.onRemoveContact,
  onSaveContact: contactsActions.onSaveContact
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
