(() => {
	function createCustomElement(el, children) {
		const elem = document.createElement(el);
		elem.innerHTML = children.join(" ");
		return elem;
	}

	function createElement(el, props, ...children) {
		const elem = createCustomElement(el, children);
	}

	const React = {
		createElement
	};
	
	const reactDom = {
		render: (el, domEl) => {
			domEl.createElement(el);
		}
	};
})();
