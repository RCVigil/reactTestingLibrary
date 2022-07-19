import React from 'react';
import { Router } from 'react-router-dom';
import createMemoryHistory from 'history';
import { render } from '@testing-library/react';

function renderWithRouter(componentRender) {
  const customHistory = createMemoryHistory();

  const renderReturn = render(
    <Router history={ customHistory }>{componentRender}</Router>,
  );

  return {
    ...renderReturn,
    history: customHistory,
  };
}

export default renderWithRouter;
