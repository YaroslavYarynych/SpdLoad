import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

	const NotFoundContainer = styled.div`
		margin-top: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 20px;
	`
	const NotFoundTitle = styled.h3`
		font-size: 70px;
		line-height: 70px;
	`

	const NotFoundText = styled.p`
		font-size: 40px
	`

	const NotFoundButton = styled.button`
		background: rgba(240, 240, 240, .7);
		margin-top: 50px;
		border: 0;
		margim: 0;
		padding: 0;
		cursor: pointer;
		padding: 12px 100px;
	`

  return (
        <NotFoundContainer>
          <NotFoundTitle>
            404 Error
          </NotFoundTitle>
          <NotFoundText>
            Page not found
          </NotFoundText>
          <NotFoundText>
            Sorry, the page you are looking for could not be found or has been
            removed.
          </NotFoundText>
            <NotFoundButton
              type="button"
              onClick={() => navigate('/home')}
            >
              Return to home page
            </NotFoundButton>
        </NotFoundContainer>
  );
};