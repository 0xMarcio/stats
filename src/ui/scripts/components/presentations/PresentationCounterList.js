import { createElement as h, Fragment } from 'react'
import PropTypes from 'prop-types'

const Row = (props) => {

	return (
		h(Fragment, {},
			h('div', {
				className: 'gridList__column gridList__column--leading'
			},
				h('div', { className: 'color-main' }, `${ props.count }x`)
			),
			h('div', {
				className: 'gridList__column'
			},
				h('div', { className: 'gridList__truncated' }, props.text)
			)
		)
	)

}

const PresentationCounterList = (props) => {

	return (
		h('div', { className: 'gridList' },
			h('div', { className: 'gridList__inner' },
				h('div', { className: 'gridList__grid gridList__grid--two' },
					props.items.map((item, index) => (
						h(Row, {
							key: item.text + index,
							...item
						})
					))
				)
			)
		)
	)

}

PresentationCounterList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PresentationCounterList