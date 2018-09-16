import React from 'react';
import Helmet from 'react-helmet';

import { PageLayout } from '../../common/components/web';
import settings from '../../../../../../settings';
import translate, { TranslateFunction } from '../../../i18n';
import { ClientCounter } from '../clientCounter';
import { ServerCounter } from '../serverCounter';
import { ReduxCounter } from '../reduxCounter';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

interface CounterProps {
  t: TranslateFunction;
}

const Counter = ({ t }: CounterProps) => (
  <PageLayout>
    <Helmet
      title={`${settings.app.name} - ${t('title')}`}
      meta={[
        {
          name: 'description',
          content: `${settings.app.name} - ${t('meta')}`
        }
      ]}
    />
    <SingleDatePicker
      date={null} // momentPropTypes.momentObj or null
      focused={null} // PropTypes.bool
      onDateChange={(date: any) => {}}
      onFocusChange={({ focused }: { focused: any }) => {}}
      id="your_unique_id" // PropTypes.string.isRequired,
    />
    <ServerCounter />
    <ReduxCounter />
    <ClientCounter />
  </PageLayout>
);

export default translate('counter')(Counter);
