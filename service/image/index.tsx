import { CloudinaryApi } from './type';


export const photoToBase64 = (file: File, cb: Function) => {

    let reader = new FileReader();
    reader.readAsDataURL(file);
    let success;
    let data;

    reader.onload = () => {
        cb(reader.result)
    }
};

export const uploadPhoto = async (file: string) => {


    const upload = await fetch(CloudinaryApi.url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                file: file,
                upload_preset: 'w1xhdtki',
                api_key: CloudinaryApi.apikey,
                timestamp: Date.now().toString(),
                publicId: 'k'

            }) // body data type must match "Content-Type" header
    }
    );
    if (upload.status != 200) {
        return { success: false, data: 'upload error' };

    }

    var data = await upload.json();
    return { success: true, data: data.secure_url }
};



