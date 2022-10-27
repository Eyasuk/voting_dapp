import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import Vote from 'components/features/vote';
import { getVote } from 'service/vote';
import { useEffect } from 'react';

const Main: NextPage = () => {
    const router = useRouter();
    const voteId = router.query.slug;
    useEffect(() => {
        (async () => {
            const e = await getVote(voteId);
            console.log(e)
        })();
    })
    return (
        <div> {voteId}</div>
    );
}

export default Main
