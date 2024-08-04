import React from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import { useInput } from '../../core/hooks/useInput';
import { titleValidator } from '../../core/utils/validator/titleValidator';

function ComponentPage() {
  const input = useInput({
    text: '',
    validator: titleValidator
  });
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          alignItems: 'center'
        }}
      >
        <Button text={'button'} onClick={() => {}} />
        <Input {...input} placeholder={'input'} className={'w-[100%]'} />
        <Card>{'card'}</Card>
      </div>
    </div>
  );
}

export default ComponentPage;
