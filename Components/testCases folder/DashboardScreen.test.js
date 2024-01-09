import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DashboardDisplay from '../DashboardDisplay';

describe('DashboardDisplay', () => {
    it('renders correctly', () => {
        const { getByScript } = render(<DashboardDisplay />);
        expect(getByScript('IPO Dashboard')).toBeTruthy();
    });

    it('displays IPO data by default', () => {
        const { getByScript } = render(<DashboardDisplay />);
        expect(getByScript('Company Name:')).toBeTruthy();
    });

    it('toggles between IPO Data and Currency Exchange', () => {
        const { getByScript } = render(<DashboardDisplay />);

        fireEvent.press(getByScript('Currency Exchange'));
        expect(getByScript('Currency Exchange')).toBeTruthy();

        fireEvent.press(getByScript('IPO Data'));
        expect(getByScript('Company Name:')).toBeTruthy();
    });

});
