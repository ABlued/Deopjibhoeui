'use client';
import React from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import { useInput } from '../../core/hooks/useInput';
import { titleValidator } from '../../core/utils/validator/titleValidator';
import Table from '../../components/Table/Table';
import { ColumnDef } from '@tanstack/react-table';

interface Sample {
  id: number;
  name: string;
  age: number;
  phone: string;
  email: string;
  addr: string;
}

function ComponentPage() {
  const input = useInput({
    text: '',
    validator: titleValidator
  });

  const data: Sample[] = [
    {
      id: 1,
      name: 'dh',
      age: 23,
      phone: '010-1234-1234',
      email: 'dhkang@naver.com',
      addr: 'seoul, korea'
    },
    {
      id: 2,
      name: 'mike',
      age: 23,
      phone: '010-1234-1234',
      email: 'mike@naver.com',
      addr: 'seoul, korea'
    }
  ];
  const column: ColumnDef<Sample>[] = [
    { id: 'id', header: '아이디', accessorFn: (row: Sample) => row.id },
    { id: 'name', header: '이름', accessorFn: (row: Sample) => row.name },
    { id: 'age', header: '나이', accessorFn: (row: Sample) => row.age },
    { id: 'phone', header: '전화번호', accessorFn: (row: Sample) => row.phone },
    { id: 'email', header: '이메일', accessorFn: (row: Sample) => row.email },
    {
      id: 'addr',
      header: '주소',
      accessorFn: (row: Sample) => row.addr
    }
  ];
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
      <Table rowData={data} columns={column} />
    </div>
  );
}

export default ComponentPage;
