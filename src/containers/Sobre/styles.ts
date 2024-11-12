import styled from 'styled-components'

export const GithubSecao = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 32px;
	margin-bottom: 64px;

	img {
		height: 157px;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`
