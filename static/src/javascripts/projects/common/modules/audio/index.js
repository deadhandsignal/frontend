// @flow

import {
    Component,
    React,
    render,
} from '@guardian/dotcom-rendering/packages/guui';
import Player from './AudioPlayer';

class AudioContainer extends Component {
    render() {
        return (
            <Player
                sourceUrl={this.props.source}
                mediaId={this.props.mediaId}
                downloadUrl={this.props.downloadUrl}
                iTunesUrl={this.props.iTunesUrl}
                barWidth={2}
                css={cssProps}
                controls="controls"
                neutralColor="#767676"
                highlightColor="blue"
            />
        );
    }
}

const init = (): void => {
    const placeholder: ?HTMLElement = document.getElementById(
        'audio-component-container'
    );

    if (placeholder) {
        const source = placeholder.dataset.source;
        const mediaId = placeholder.dataset.mediaId;
        const downloadUrl = placeholder.dataset.downloadUrl;
        const iTunesUrl = placeholder.dataset.itunesUrl;
        render(
            <AudioContainer
                source={source}
                mediaId={mediaId}
                downloadUrl={downloadUrl}
                iTunesUrl={iTunesUrl}
            />,
            placeholder
        );
    }
};

export { init };

// temporary fixtures

const cssProps = {
    volume: {
        trackColour: '#000000',
        progressColour: '#00ff00',
    },
    track: {
        trackColour: '#000000',
        progressColour: '#0000ff',
    },
};

