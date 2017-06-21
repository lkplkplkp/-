import React from 'react';
import { Row, Col } from 'antd';

import { Menu, Icon,Tabs,message,Form,Input,Button,CheckBox,Modal } from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

 class MobileHeader extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			current:'top',
			modalVisible:false,
			action:'login',
			hasLogined:false,
			userNickName:'',
			userid:0
		}
	};
	setModalVisible(value){
		this.setState({
			modalVisible:value
		});
	};
	handleClick(e){
		if(e.key='register'){
			this.setState({
				current:'register'
			});
			this.setModalVisible(true);
		}else{
			this.setState({current:e.key});
		}
	};
	handleSubmit(e){
		//页面开始向api提交数据
		// 原生阻止事件冒泡
		e.preventDefault();

		var myFetchOptions = {
			// get提交
			method:'GET'
		};
		// 对页面参数的获取
		var formData = this.props.form.getFieldsValue();
		console.log(formData);
		// fetch("url")
	}
	login(){
		this.setModalVisible(true)
	};

	render(){
		let {getFieldProps} =this.props.form;
		const userShow = this.state.hasLogined ?
		<Link>
			<Icon type="inbox"/>
		</Link>
		:
		<Icon type="setting" onClick={this.login.bind(this)}/>

		return(
			<div id="mobileheader">
				<header>
					<img src="./src/image/news.png" alt="logo"/>
					<span>ReactNews</span>
					{userShow}
				</header>
				<Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)} okText="关闭">
					<Tabs type="card">
						<TabPane tab="注册" key="2">
							<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
								<FormItem label="账户">
								<Input placeholder="请输入您的账号" {...getFieldProps('r_userName')}/>
								</FormItem>
								<FormItem label="密码">
								<Input type="password" placeholder="请输入您的密码" {...getFieldProps('r_password')}/>
								</FormItem>
								<FormItem label="密码">
								<Input type="password" placeholder="请再次输入您的密码" {...getFieldProps('r_confirmPassword')}/>
								</FormItem>
								<Button type="primary" htmlType="submit">注册</Button>
							</Form>
						</TabPane>
					</Tabs>
				</Modal>
			</div>
			)
	}
}

export default MobileHeader = Form.create({})(MobileHeader);