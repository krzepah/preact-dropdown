import { Component } from 'preact';

class Dropdown extends Component {
	state = { open: false };
	close = () => (this.setState({open: false}), false)
    toggle = () => {
		this.setState({open: !this.state.open});
	}
    handleClick = ({target}) => {
		if (String(this.props.id) === String(target.id))
            this.toggle();
        else if (this.state.open) {
            do {
                if (target===this.base) return;
            } while ((target=target.parentNode))
            this.close();
        }
    }
    componentDidMount = () => addEventListener(
		'click', this.handleClick
	)
	componentWillUnmount = () => removeEventListener(
		'click', this.handleClick
	)
	componentDidUpdate = ({current}) => {
		if (current!==this.props.current && this.state.open)
			this.close(); 
	}
	render = ({children, Link, ...args}, {open}) => <div
		ref={button => this.button = button}
	>
		<Link
			onClick={this.toggle}
			{...args}
		/>
		{ open ? children : null }
	</div>
}

class DropReplace extends Dropdown {
	render = ({children, Link, ...args}, {open}) => <div
		ref={button => this.button = button}
	>
		{ open ? 
				children
				: <Link {...args} />
		}
	</div>
}

export default Dropdown;
export { DropReplace }
