import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

	* {
		margin: 0;
		border: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Nunito", sans-serif;
	}

	:root {
		--white: #FFF;
		--background-home: #212529;
		--background-button-home: #FD377E;
		--background-header-dashboard: #F8F9FA;
		--background-button-dashboard: #E9ECEF;
		--color-text-header: #5B6166;
		--color-error-label: #E50914;
		--color-price-card: #343A40;
		--color-box-shadow: rgba(0, 0, 0, 0.25);
		--color-span: #868E96;
	}

	input {
		outline: none;
	}

	button {
		cursor: pointer;
		transition: .5s;
	}

	a {
		text-decoration: none;
	}
	
	&::-webkit-scrollbar {
		display: none;
	}
`;
