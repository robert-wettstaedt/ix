// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { IxButton, showToast } from '@siemens/ix-react';
import React from 'react';

export const Toast: React.FC = () => {
  return (
    <>
      <IxButton
        onClick={() => {
          showToast({
            message: 'My toast message!',
          });
        }}
      >
        Trigger toast
      </IxButton>
    </>
  );
};
