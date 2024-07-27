import SocialMediaLink from './SocialMediaLink';

const SocialMediaContainer = () => {
    return (
        <section>
            <SocialMediaLink
                url='https://www.youtube.com/channel/UCyojgX8y0urWh0Kn4rIx5Xw'
                icon='fa-youtube'
            />
            <SocialMediaLink
                url='https://www.instagram.com/frontend.road/'
                icon='fa-instagram'
            />
            <SocialMediaLink
                url='https://discord.com/channels/1217061527526576189/1217061527526576192'
                icon='fa-discord'
            />
        </section>
    );
};

export default SocialMediaContainer;