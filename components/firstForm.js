import React, {
  Component,
  PropTypes
} from 'react';
import ReactDOM from 'react-dom'
import { Form, Row, Col, Input, Button, Icon ,Radio } from 'antd';
import {ExportButton} from './ExportButton';
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { TextArea } = Input;
class DataForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
         
      }   
  }
  retrieveFormData(){
    var result = {};
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        result = values;
      }
    });
    return result;
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    var br="<br>";
    var formStyle={
        border:'1px solid #ddd',
        padding:'10px'
    }
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 3 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 21 },
      },
    };
    const smallFormItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    return (
       <Form formStyle onSubmit={this.handleSubmit.bind(this)}>
            <FormItem
              {...formItemLayout}
              label="单位名称"
              hasFeedback
            >
              {getFieldDecorator('companyName')(
                <TextArea placeholder="应填写全称，与单位合法身份证明文件相一致"  autosize/>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="社会统一信用代码"
              hasFeedback
            >
              {getFieldDecorator('creditCode')(
                <TextArea autosize={{ minRows: 2, maxRows: 6 }} /> 
                
              )}
            </FormItem>
            <Col span={12}  style={{ 'block' : 'none' }}>
              <FormItem
                {...smallFormItemLayout}
                label="单位性质"
                hasFeedback
              >
                {getFieldDecorator('companyType')(
                  <TextArea placeholder="按照营业执照单位法人证书的内容填写" autosize/>
                )}
              </FormItem>
            </Col>
            <Col span={12}  style={{ 'block' : 'none' }}>
              <FormItem
                {...smallFormItemLayout}
                label="法人代表"
                hasFeedback
              >
                {getFieldDecorator('legalBody')(
                  <Input  />
                )}
              </FormItem>
            </Col>
            <Col span={12}  style={{ 'block' : 'none' }}>
              <FormItem
                {...smallFormItemLayout}
                label="单位人数"
                hasFeedback
              >
                {getFieldDecorator('companyPersonCount')(
                  <Input  />
                )}
              </FormItem>
            </Col>
            <Col span={12}  style={{ 'block' : 'none' }}>
              <FormItem
                {...smallFormItemLayout}
                label="涉密人员数"
                hasFeedback
              >
                {getFieldDecorator('secretPersonCount')(
                  <Input  />
                )}
              </FormItem>
            </Col>
            <FormItem
              {...formItemLayout}
              label="科研生产(办公)地址"
              hasFeedback
            >
              {getFieldDecorator('location')(
                <TextArea placeholder="单位有多个科研生产(办公)地址的,分别说明单位科研生产(办公)具体地址" autosize={{ minRows: 2, maxRows: 6 }} />                
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="通信地址"
              hasFeedback
            >
              {getFieldDecorator('mailAddress')(
                <TextArea  autosize/> 
              )}
            </FormItem>
            <Col span={12}  style={{ 'block' : 'none' }}>
              <FormItem
                {...smallFormItemLayout}
                label="邮政编码"
                hasFeedback
              >
                {getFieldDecorator('postcode')(
                  <Input  />
                )}
              </FormItem>
            </Col>
            <Col span={12}  style={{ 'block' : 'none' }}>
              <FormItem
                {...smallFormItemLayout}
                label="联系电话"
                hasFeedback
              >
                {getFieldDecorator('phone')(
                  <Input  />
                )}
              </FormItem>
            </Col>
            <Col span={12}  style={{ 'block' : 'none' }}>
              <FormItem
                {...smallFormItemLayout}
                label="单位创建时间"
                hasFeedback
              >
                {getFieldDecorator('createTime')(
                  <Input  />
                )}
              </FormItem>
            </Col>
            <Col span={12}  style={{ 'block' : 'none' }}>
              <FormItem
                {...smallFormItemLayout}
                label="是否为上市公司"
                style={{'overflow':'auto'}}
                hasFeedback
              >
                {getFieldDecorator('isIpo')(
                  <RadioGroup defaultValue="1">
                    <RadioButton value="1">是</RadioButton>
                    <RadioButton value="0">否</RadioButton>
                  </RadioGroup>
                )}
              </FormItem>
            </Col>
            <Col span={12}  style={{ 'block' : 'none' }}>
              <FormItem
                {...smallFormItemLayout}
                label="注册资金"
                hasFeedback
              >
                {getFieldDecorator('registeredCapital')(
                  <Input  />
                )}
              </FormItem>
            </Col>
            <Col span={12}  style={{ 'block' : 'none' }}>
              <FormItem
                {...smallFormItemLayout}
                label="固定总资产"
                hasFeedback
              >
                {getFieldDecorator('fixedAssets')(
                  <Input  />
                )}
              </FormItem>
            </Col>
            <FormItem
              {...formItemLayout}
              label="股权结构"
              hasFeedback
            >
              {getFieldDecorator('ownershipStructure')(
                <TextArea placeholder="主要范围为所有股东名单及持股比例(可另附页)" autosize/>                
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="股权结构股权结构股权结构股权结构股权结构股权结构股权结构股权结构股权结构股权"
              hasFeedback
            >
              {getFieldDecorator('password')(
                <TextArea placeholder="主要范围为所有股东名单及持股比例(可另附页)主要范围为所有股东名单及持股比例(可另附页)主要范围为所有股东名单及持股比例(可另附页)主要范围为所有股东名单及持股比例(可另附页)" autosize={{ minRows: 4, maxRows: 8 }}/>                
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <ExportButton data={this.retrieveFormData.bind(this)}/>
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">保存</Button>
            </FormItem>
       </Form>
    );
  }
}

const WrappedDataForm = Form.create()(DataForm);
ReactDOM.render(<WrappedDataForm />, document.getElementById("session"));