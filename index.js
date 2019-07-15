import { Component, h } from 'preact';

/**
 * A dropdown component
 * @param children
 * @param Link => <Link ...args />
 * @param ...args are sent to Link
 * @example
 * <DropDown Link={Button}>
 *   <div>
 *	  My inner content
 *   </div>
 * </Dropdown>
 */
class Dropdown extends Component {
	state = { open: false };
	close = () => (this.setState({ open: false }), false);
	toggle = () => this.setState({ open: !this.state.open });
	handleClick = ({ target }) => {
		if (target===this.base.firstChild)
			this.toggle();
		else if (this.state.open) {
			do {
				if (target===this.base) return;
			} while ((target=target.parentNode));
			this.close();
		}
	}
	componentDidMount = () => addEventListener(
		'click', this.handleClick
	)
	componentDidUpdate = ({ current }) => {
		if (current!==this.props.current && this.state.open)
			this.close();
	}
	componentWillUnmount = () => removeEventListener(
		'click', this.handleClick
	)
	render = ({ children, Link, ...args }, { open }) => (
		<div ref={button => this.button = button}>
			<Link {...args} />
			{ open ? children : null }
		</div>
	)
}

/**
 * Works just like DropDown but replaces the <Link>
 */
class DropReplace extends Dropdown {
	render = ({ children, Link, ...args }, { open }) => (
		<div ref={button => this.button = button}>
			{ open ?
				children
				: <Link {...args} />
			}
		</div>
	)
}

export {
	Dropdown,
	DropReplace
};
