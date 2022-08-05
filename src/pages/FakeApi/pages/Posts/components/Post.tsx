import {PostApi} from "../../../../../types/types";
import {Card} from "react-bootstrap";
import {useMemo, useState} from "react";

interface Props{
    post: PostApi;
}

const Post = (props: Props) => {
    const {post} = props;

    return useMemo(() => {
        return <Card className={"mb-3"}>
            <Card.Body>
                <Card.Title>
                    {post.title}
                </Card.Title>
                <Card.Body>
                    {post.body}
                </Card.Body>
            </Card.Body>
        </Card>
    }, [post]);
}
export default Post