import { render, screen, testA11y } from '@fuel-ui/test-utils';

import { MOCK_OPERATION } from '../../__mocks__/operation';

import { TxOperation } from './TxOperation';

const PROPS = {
  operation: MOCK_OPERATION,
};

describe('TxOperation', () => {
  it('a11y', async () => {
    await testA11y(<TxOperation {...PROPS} />);
  });

  it('should render both cards correctly and dont have spinner', async () => {
    render(<TxOperation {...PROPS} />);
    expect(screen.getByText('From')).toBeInTheDocument();
    expect(screen.getByText('fuel1y...y6wk')).toBeInTheDocument();
    expect(screen.getByText('To (Contract)')).toBeInTheDocument();
    expect(screen.getByText('0x277f...207c')).toBeInTheDocument();
    expect(() => screen.getByLabelText('Loading Spinner')).toThrow();
    expect(screen.getByText('Ethereum')).toBeInTheDocument();
  });

  it('should not render assets amount card', async () => {
    render(
      <TxOperation operation={{ ...MOCK_OPERATION, assetsSent: undefined }} />
    );
    expect(screen.getByText('From')).toBeInTheDocument();
    expect(screen.getByText('fuel1y...y6wk')).toBeInTheDocument();
    expect(screen.getByText('To (Contract)')).toBeInTheDocument();
    expect(screen.getByText('0x277f...207c')).toBeInTheDocument();
    expect(() => screen.getByLabelText('Loading Spinner')).toThrow();
    expect(screen.getByText('Ethereum')).toBeInTheDocument();
  });
});
