import { Component, h } from 'preact';

/**
 * A dropdown component
 * @param children is the element displayed on trigger
 * @param Link is the element displayed to trigger the dropdown
 * @param ...args are sent to Link
 * @example
 * <DropDown Link={Button}>
 *   <div>
 *	  My inner content
 *   </div>
 * </Dropdown>
 */
class Dropdown extends Component {
	close() {
		this.setState({ open: false });
	}
	toggle() {
		this.setState({ open: !this.state.open });
	}
	constructor() {
		super();
		this.state = { open: false };
	}
	componentDidMount() {
		const that = this;
		addEventListener('click', ({ target }) => {
			if (that.base === null)
				return;
			if (target===that.base.firstChild)
				that.toggle();
			else if (that.state.open) {
				do {
					if (target===that.base) return;
				} while ((target=target.parentNode));
				that.close();
			}
		});
	}
	componentWillUnmount() {
		removeEventListener('click', this.handleClick);
	}
	render({ children, Link, ...args }, { open }) {
		return (
			<div>
				<Link {...args} />
				{ open ? children : null }
			</div>
		);
	}
}

/**
 * Works just like DropDown but replaces the Link with the children content
 */
class DropReplace extends Dropdown {
	render({ children, Link, ...args }, { open }) {
		return (
			<div>
				{ open ?
					children
					: <Link {...args} />
				}
			</div>
		);
	}
}

export {
	Dropdown,
	DropReplace
};
