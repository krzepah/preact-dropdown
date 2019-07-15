import { h } from 'preact';
import render from 'preact-render-to-string';
import htmlLooksLike from 'html-looks-like';

import { Dropdown } from './index';

const Link = () => <div>Hello World</div>

describe('Dropdown', () => {
    it('should render given component', () => {
        const instance = render(<Dropdown Link={Link} />)
        const expected = `
            <div>
                <div>Hello World</div>
            </div>
        `
        htmlLooksLike(instance, expected);
    });
});
