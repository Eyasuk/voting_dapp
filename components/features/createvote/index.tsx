import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Form, DatePicker, Input, Radio, Upload, InputNumber, Switch } from 'antd';
import Button from 'components/shared/button';
import type { RangePickerProps } from 'antd/es/date-picker';
import moment from 'moment';
import LoadingIndicator from 'components/shared/loadingIndicator';
import { useAddVote } from 'context/addVote';
import { useNewVote } from 'context/newvoteinfo';
import { voteInfoType } from 'context/newvoteinfo/types';
import { usePageStatus } from 'context/pages';
import { photoToBase64, uploadPhoto } from 'service/image';

import styles from './createvote.module.scss';


const { RangePicker } = DatePicker;
export default function CreateVote(): JSX.Element {

    const { backStep, nextStep, step } = useAddVote();
    const { setVote } = useNewVote();
    const [loading, setLoading] = useState<boolean>(false);
    const [maxVoter, setMaxVoter] = useState<boolean>(true);
    const onSwitchChange = (value: any) => {
    };

    const disabledDate: RangePickerProps['disabledDate'] = current => {
        // Can not select days before today and today
        return current && current < moment().startOf('days');
    };

    const onFinish = (values: any) => {
        photoToBase64(values.image.file.originFileObj, async (value: string) => {
            setLoading(true);
            const image = (await uploadPhoto(value)).data;
            const voteInformation: voteInfoType = {
                voteName: values.name,
                enableMaxVoter: values.maxEnable,
                maxVoter: values.max ?? -1,
                startDate: (~~(Date.parse(values.date[0]._d) / 1000)).toString(),
                endDate: (~~(Date.parse(values.date[1]._d) / 1000)).toString(),
                voteImage: image
            };
            setVote(voteInformation);
            setLoading(false);
            nextStep();
        });
    };

    const onFFinish = (values: any) => {
        console.log(values)
    }
    return (
        <>{loading && <LoadingIndicator />}
            <div className={styles.container}>
                <Form
                    className={styles.form}
                    labelCol={{ span: 10 }}
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFFinish}
                >
                    <Form.Item label="Name" name='name'>
                        <Input required />
                    </Form.Item>
                    <Form.Item label="Max Voter" name='max'>
                        <div className={styles.maxVoter}>
                            <InputNumber disabled={maxVoter} required />
                            <div className={styles.switch}>
                                <Form.Item name='maxEnable'>
                                    <Switch onChange={onSwitchChange} />
                                </Form.Item></div>

                        </div>
                    </Form.Item>
                    <Form.Item label="Upload" name='image' >
                        <Upload listType="picture-card" maxCount={1}
                        >
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

                    <Form.Item label="Date" name='date'>
                        <RangePicker
                            disabledDate={disabledDate}
                            showTime={{ format: 'HH:mm', }}
                            format='YYYY-MM-DD HH:mm'
                            allowEmpty={[false, false]}
                            className={"createDateRangePicker"}
                            dropdownClassName={"createDateRangePicker"}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button text='back' onClick={backStep} />
                        <Button text='next'

                            submit={true} />
                    </Form.Item>

                </Form>
            </div >
        </>);
}