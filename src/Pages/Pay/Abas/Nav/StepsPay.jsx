import React from 'react';

import { Steps, Button, message } from 'antd';
import { SolutionOutlined, SmileOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'

import {FiShoppingBag} from 'react-icons/fi';
import {MdOutlinePayment} from 'react-icons/md';

import Product from '../View/Product';
import Address from '../View/Address';
import Pay from '../View/Pay';
import Confirm from '../View/Confirm';

import './StepsPay.css';

const { Step } = Steps;

const steps = [
    {
        title: 'Produto',
        content: <Product/>,
        icon: <FiShoppingBag/>,
    },
    {
        title: 'Dados Pessoais',
        content: <Address/>,
        icon: <SolutionOutlined/>,
    },
    {
        title: 'Pagamento',
        content: <Pay/>,
        icon: <MdOutlinePayment/>,
    },
    {
        title: '',
        content: <Confirm/>,
        icon: <SmileOutlined/>,
    },
]

const StepsPay = () => {

    const [current, setCurrent] = React.useState(0);

    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };

    
    return(

        <>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title}  icon={item.icon}/>
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Proximo
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Pronto
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Anterior
            </Button>
          )}
        </div>
      </>

    );
}

export default StepsPay;











