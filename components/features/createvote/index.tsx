import { PlusOutlined } from '@ant-design/icons';
import { Form, DatePicker, Input, Radio, Upload, InputNumber, Switch } from 'antd';
import Button from 'components/shared/button';
import styles from './createvote.module.scss';

const { RangePicker } = DatePicker;
export default function CreateVote(): JSX.Element {
    const onChange = (value: any, dateString: any) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };

    const onOk = (value: any) => {
        console.log('onOk: ', value);
    };

    return (
        <div className={styles.container}>
            <Form
                className={styles.form}
                labelCol={{ span: 10 }}
                layout="vertical"
            >
                <Form.Item label="Name">
                    <Input />
                </Form.Item>
                <Form.Item label="Max Voter">
                    <InputNumber />

                    <Switch />

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

                <Form.Item label="Date">
                    <RangePicker showTime={{ format: 'HH:mm', }}
                        format='YYYY-MM-DD HH:mm'
                        onChange={onChange}
                        onOk={onOk}
                    />
                </Form.Item>
                <Form.Item label="Close if all voters voted">
                    <Radio.Group>
                        <Radio value="yes"> Yes </Radio>
                        <Radio value="no"> Yes </Radio>
                    </Radio.Group>
                </Form.Item>

            </Form>



        </div>
    );
}