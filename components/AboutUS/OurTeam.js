/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import TeamCard from "./TeamCard";

function OurTeam() {
    const cardData = [
        {
            id: 1,
            name: "Mahbubur Rahman",
            title: "Team Leader",
            image: "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/274539350_110591724889581_5173861364353914214_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH4yw4XAcjCpCQ9IBzp_eZrbbSuy403AVdttK7LjTcBV7kgKvWC4x7fvUKk3p4bpxlNK-1dhIq81lnKwW6mr3rp&_nc_ohc=RcgaJVx3HcwAX-NN_b5&_nc_ht=scontent.fdac24-3.fna&oh=00_AfBkKnX6-Iq_a2d7V7cBLX-0skabUAwRJEvv8H3XrU-8xA&oe=63EB11BA",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, pariatur.",
            icon: 'https://www.facebook.com/mahbubur.rahman.dev',
            linkedin: 'https://www.linkedin.com/in/mahbubur-rahman-1003121b8/',
            bgClass: "bg-gradient-to-r from-gray-900 to-gray-600 hover:from-gray-600 hover:to-gray-900",
        },
        {
            id: 2,
            name: "Shakeebul Islam",
            title: "Team Member",
            image: "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/283944352_1619876068397484_6126475586258932922_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFdGru-Nrc_qDoQj_7yMwOkQO-MBJXEg6FA74wElcSDoYWeG26ottDeDlUfEJoWbVcQUJk5VLE7yH4kcZsG-I98&_nc_ohc=KY98ooU6NXUAX-9drNu&tn=noArFsYSy-Zpq61-&_nc_ht=scontent.fdac24-3.fna&oh=00_AfDZzJdKJvtZfctlxcl4i7Cc77JB-wxLF9-U-ZVhFuxcdg&oe=63EA8FF2",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, pariatur.",
            icon: 'https://www.facebook.com/mdshakeebltd/',
            linkedin: 'https://www.linkedin.com/in/mdshakeeb/?fbclid=IwAR0yE7Remf6daiRI3kjYxepycn_7ayA313By6F-AOzzmo2fhwJVqQjqOhss',
            bgClass: "bg-gray-600  hover:bg-gray-800",
        },
        {
            id: 3,
            name: "Akm Syful Alom",
            title: "Team Member",
            image: "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/273690353_988997571738189_6804118633912659023_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHUS-3eRpBCr3Gl_lt74UL82nZRXuqhZz3adlFe6qFnPWWUPgUCecXbogJTOPPK9kGaKqqg7VvrSXBR39jO6Sqb&_nc_ohc=q9978_aL0SwAX_ZNDuN&_nc_ht=scontent.fdac24-1.fna&oh=00_AfBNcZA33E1uijxgIk6no6EauAQIFPriosqZSMvNGyRgeg&oe=63EB030A",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, pariatur.",
            icon: 'https://www.facebook.com/akmsyful',
            linkedin: 'https://www.linkedin.com/in/akmsyful/?fbclid=IwAR3kEUxDPBMVgNUSMmwD9l7sMh0QUW-MJcq9nqGmIfRtL-ODayo9y4ByNsQ',
            bgClass: "bg-gradient-to-r from-gray-600 to-gray-900 hover:from-gray-900 hover:to-gray-600",
        },
        {
            id: 4,
            name: "Md. Rajikul Islam",
            title: "Team Member",
            image: "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/296830406_447423943924838_3440231462048082437_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGWwKN59qxX2_Aq4WEFs1FvYP7JWB8F_6Fg_slYHwX_oVLHiv7SEPE9gkpDZuRSNpGNZxd8d4TNkgX4AE9QTmgu&_nc_ohc=zFlNPTdjlEEAX8E6Zi-&tn=noArFsYSy-Zpq61-&_nc_ht=scontent.fdac24-4.fna&oh=00_AfAKBZcFvQ_3_KMtgcPLZ3blEQmRPnnieG4ei2fp_aQ4VQ&oe=63EA5C13",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, pariatur.",
            icon: 'https://www.facebook.com/rajikul.is.rajib',
            linkedin: 'https://www.linkedin.com/in/md-junaidul-islam/?fbclid=IwAR2E_-WUhXS7Jk1WVCr22BBmlOrJxa5AyAol1u0IGooj_hU6NbDImKrxKI0',
            bgClass: "bg-gradient-to-r from-gray-900 to-gray-600 hover:from-gray-600 hover:to-gray-900",
        },
        {
            id: 5,
            name: "Jahirul Islam",
            title: "Team Member",
            image: "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/329212106_709017097562167_4999099361181346082_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHQk24vT7KSDb7f0BXI3ips0l8TXF5sYunSXxNcXmxi6aIFZ6kW6F5nJDuR-51WfjDNalr1JHBwx-0bLSx8UBzZ&_nc_ohc=H-C8hWagujQAX_fH_UY&_nc_ht=scontent.fdac24-4.fna&oh=00_AfBx2nJY-zcdCyLFC1_cHwE_Ku4IixK_dyK7feLoUVCiSw&oe=63EA337B",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, pariatur.",
            icon: 'https://www.facebook.com/jahirulislam200',
            linkedin: 'https://www.linkedin.com/in/dev-jahirul-islam/',
            bgClass: "bg-gray-600  hover:bg-gray-800",
        },
        {
            id: 6,
            name: "Md. Junaidul Islam",
            title: "Team Member",
            image: "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/326534109_725507172292717_1707031750029557006_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHC-3D9aJA-wgsMrrVrihVpyP-ArPUpfUHI_4Cs9Sl9QQGH0URdX3UpmYPrFSKbkto2NMXuqBAcAdDwbsrZC8Ot&_nc_ohc=ixSdeizTVP8AX806Pll&_nc_ht=scontent.fdac24-4.fna&oh=00_AfDnSnlSoIC-3DuzLK68HCytzBzXO89-ko_NVoVOAMYPhw&oe=63EAC2B4",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, pariatur.",
            icon: 'https://www.facebook.com/junaaid96/',
            linkedin: 'https://www.linkedin.com/in/md-junaidul-islam/?fbclid=IwAR2E_-WUhXS7Jk1WVCr22BBmlOrJxa5AyAol1u0IGooj_hU6NbDImKrxKI0',
            bgClass: "bg-gradient-to-r from-gray-600 to-gray-900 hover:from-gray-900 hover:to-gray-600",
        },
    ];


    return (
        <div className="p-10 bg-white">
            <h1 className="text-center text-3xl font-bold">Our Team</h1>
            <p className="text-center mt-1">The callback developers' team</p>

            <div className="flex justify-center">
                <div className="grid mt-8 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {cardData.map((card) => (
                        <TeamCard key={card.id} card={card}></TeamCard>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurTeam;