import { useEffect, useState } from 'react';
import { Avatar, Card } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Form, DatePicker, Input, Radio, Upload, InputNumber, Switch } from 'antd';
import Button from 'components/shared/button';
import { useAddVote } from 'context/addVote';
import { useAddCandidate } from 'context/addcandidate';
import { candidateType } from 'context/addcandidate/types';
import { photoToBase64 } from 'service/image'

import styles from './addcandidate.module.scss';;

const { TextArea } = Input;
const { Meta } = Card;

export default function AddCandidate(): JSX.Element {

    const { candidates, addCandidate, removeCandidate } = useAddCandidate();
    const { backStep, nextStep } = useAddVote();

    const onFinish = (values: any) => {
        let image: string;
        photoToBase64(values.image.file.originFileObj, (value: string) => {
            image = value;
            const candidate: candidateType = [
                values.name,
                values.description,
                image,
                0,

            ];
            addCandidate(candidate);
        });

    };

    const deleteCandidate = (index: number) => {
        removeCandidate(index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.form}><p>Add Candinate</p>
                <Form
                    labelCol={{ span: 10 }}
                    layout="vertical"
                    onFinish={onFinish}>
                    <Form.Item label="Name" name='name' required>
                        <Input />
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

                    <Form.Item label="Description" name="description" required>
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item>

                        <Button text='add'

                            submit={true} />
                    </Form.Item>
                    <Form.Item>
                        <Button text='back' onClick={backStep} />
                        <Button text='next' onClick={nextStep} />
                    </Form.Item>
                </Form></div>
            <div className={styles.candidates}>
                <p>candidates</p>
                <div className={styles.candidate}>
                    {
                        candidates.map((value, index) => {
                            return <Card className={styles.candidateBox} key={index} hoverable={true}
                                cover={
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        alt={value[0]}
                                        src={value[2]}
                                    />}
                                actions={[
                                    <EditOutlined key='edit' />,
                                    <DeleteOutlined key='delete' onClick={() => deleteCandidate(index)} />
                                ]}>
                                <Meta
                                    className={styles.content}
                                    title={value[0]}
                                    description={value[1]}
                                />
                            </Card>
                        })
                    }
                </div>
            </div>
        </div >
    );
} 