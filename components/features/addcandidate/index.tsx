import { useState } from 'react';
import { Avatar, Card } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Form, DatePicker, Input, Radio, Upload, InputNumber, Switch } from 'antd';
import Button from 'components/shared/button';


import styles from './addcandidate.module.scss';

const { TextArea } = Input;
const { Meta } = Card;

const c = [{ 'name': 'd', image: 'd' }, { 'name': 'd', image: 'd' }, { 'name': 'd', image: 'd' }];
export default function AddCandidate(): JSX.Element {
    const [candidate, setCandidate] = useState(c);
    return (
        <div className={styles.container}>
            <div className={styles.form}><p>Add Candinate</p>
                <Form
                    labelCol={{ span: 10 }}
                    layout="vertical">
                    <Form.Item label="Name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Upload" valuePropName="fileList">
                        <Upload action="/upload.do" listType="picture-card">
                            <div>
                                <PlusOutlined />
                                <div
                                    style={{
                                        marginTop: 8,
                                    }}
                                >
                                    Upload
                                </div>
                            </div>
                        </Upload>
                    </Form.Item>
                    <Form.Item label="Description">
                        <TextArea rows={4} />
                    </Form.Item>


                </Form></div>
            <div className={styles.candidates}>
                <p>candidates</p>
                <div className={styles.candidate}>
                    {
                        candidate.map((value, index) => {
                            return <Card className={styles.candidateBox} key={index} hoverable={true}
                                cover={
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        alt={value.name}
                                        src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                                    />}
                                actions={[
                                    <EditOutlined key='edit' />,
                                    <DeleteOutlined key='delete' />
                                ]}>
                                <Meta
                                    className={styles.content}
                                    title={value.name}
                                    description="This is the description"
                                />
                            </Card>
                        })
                    }
                </div>
            </div>
        </div >
    );
} 