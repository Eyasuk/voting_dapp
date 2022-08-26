import { PlusOutlined } from '@ant-design/icons';
import { Form, DatePicker, Input, Radio, Upload, InputNumber, Switch } from 'antd';
import Button from 'components/shared/button';

import styles from './addcandidate.module.scss';

const { TextArea } = Input;

export default function addCandidate(): JSX.Element {
    return (
        <div className={styles.container}>
            <p>Add Candinate</p>
            <Form className={styles.form}
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
                <Form.Item label="TextArea">
                    <TextArea rows={4} />
                </Form.Item>

                <Button text='next' />
            </Form>
        </div>
    );
} 