import { useContext } from 'react';

import { Button, Select, Card, Form } from 'antd';

import Context from '../Context';

const Selector = () => {
  const { dispatch }: any = useContext(Context);
  const options = [
    { value: '东' },
    { value: '西' },
    { value: '南' },
    { value: '北' },
  ];
  return (
    <>
      <Card style={{ width: '90%', margin: '20px' }}>
        <Form
          name="POV"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Select style={{ width: 120 }} options={options} />
          <Button
            type="primary"
            onClick={() => {
              dispatch({ type: 'Add' });
            }}
          >
            确定
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default Selector;
