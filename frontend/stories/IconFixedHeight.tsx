import { FunctionComponent } from 'preact';

const IconFixedHeight: FunctionComponent = () => {
    return (
        <svg
            className="icon"
            fill="white"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5zm0 13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5z"/>
            <path d="M2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z"/>
        </svg>
    );
}

export default IconFixedHeight;