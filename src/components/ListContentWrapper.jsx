import SingleProject from "./SingleProject";

const ListContentWrapper = () => {
  // Dummy Data
  const projectsData = [
    {
      id: 1,
      ProjectId: "0011-11100",
      detailedViewName: "Dave Matthews Band",
      detailedViewStatus: "Finished",
      detailedViewSecondaryName: "Island Records",
      projectData: [
        {
          day: "Monday",
          dayBG: "#EFDCFF",
          releaseDate: "18-Sept-23",
          artist: "Dave Matthews Band",
          title: "One",
          config: "eSingle",
          format: "Audio",
          upc: "0000123456789",
          genre: "Rock",
          pa: "N/A",
          componentCount: "1",
          trackCount: "1",
          productionContact: "Hannah Rosen",
          recordChecks: [
            {
              title: "Label Copy",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Rights",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Atwork",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Playable Media",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Delivery Status",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
          ],
        },
        {
          day: "Tuesday",
          dayBG: "#FA9CE0",
          releaseDate: "26-Sept-23",
          artist: "Dave Matthews Band",
          title: "Two",
          config: "eSingle",
          format: "Audio",
          upc: "0000123456789",
          genre: "Rock",
          pa: "N/A",
          componentCount: "1",
          trackCount: "1",
          productionContact: "Hannah Rosen",
          recordChecks: [
            {
              title: "Label Copy",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Rights",
              status: "Incomplete",
              boxBg: "#FFB4AB",
            },
            {
              title: "Atwork",
              status: "Incomplete",
              boxBg: "#FFB4AB",
            },
            {
              title: "Playable Media",
              status: "Incomplete",
              boxBg: "#FFB4AB",
            },
            {
              title: "Delivery Status",
              status: "Not Delivered",
              boxBg: "#FFB4AB",
            },
          ],
        },
        {
          day: "Wednesday",
          dayBG: "#EFDCFF",
          releaseDate: "04-Oct-23",
          preReleasedDate: "04-Sept-2023",
          artist: "Dave Matthews Band",
          title: "Three",
          config: "eAlbum Audio",
          format: "Audio",
          upc: "0000123456789",
          genre: "Rock",
          pa: "N/A",
          componentCount: "1",
          trackCount: "1",
          productionContact: "Hannah Rosen",
          recordChecks: [
            {
              title: "Label Copy",
              status: "Incomplete",
              boxBg: "#FFB4AB",
            },
            {
              title: "Rights",
              status: "Incomplete",
              boxBg: "#FFB4AB",
            },
            {
              title: "Atwork",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Playable Media",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Delivery Status",
              status: "Not Delivered",
              boxBg: "#FFB4AB",
            },
          ],
        },
        {
          day: "Thursday",
          dayBG: "#DEEA5C",
          releaseDate: "12-Oct-23",
          artist: "Dave Matthews Band",
          title: "Finished",
          config: "Vinyl Album 12",
          format: "Vinyl Album",
          upc: "0000123456789",
          genre: "Rock",
          pa: "N/A",
          componentCount: "1",
          trackCount: "1",
          productionContact: "Hannah Rosen",
          recordChecks: [
            {
              title: "Label Copy",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Rights",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Atwork",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Playable Media",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
          ],
        },
        {
          day: "Friday",
          dayBG: "#EFDCFF",
          releaseDate: "13-Oct-23",
          artist: "Dave Matthews Band",
          title: "Finished",
          config: 'Vinyl Album 12"',
          format: "Audio-Vinyl",
          upc: "0000123456789",
          genre: "Rock",
          pa: "N/A",
          componentCount: "1",
          trackCount: "1",
          productionContact: "Hannah Rosen",
          recordChecks: [
            {
              title: "Label Copy",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Rights",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Atwork",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Playable Media",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
          ],
        },
      ],
    },

    {
      id: 2,
      ProjectId: "0022-22200",
      detailedViewName: "Dave Matthews Band",
      detailedViewStatus: "Finished",
      detailedViewSecondaryName: "Island Records",
      projectData: [
        {
          day: "Monday",
          dayBG: "#EFDCFF",
          releaseDate: "18-Sept-23",
          artist: "Dave Matthews Band",
          title: "One",
          config: "eSingle",
          format: "Audio",
          upc: "0000123456789",
          genre: "Rock",
          pa: "N/A",
          componentCount: "1",
          trackCount: "1",
          productionContact: "Hannah Rosen",
          recordChecks: [
            {
              title: "Label Copy",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Rights",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Atwork",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Playable Media",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Delivery Status",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
          ],
        },
        {
          day: "Tuesday",
          dayBG: "#FA9CE0",
          releaseDate: "26-Sept-23",
          artist: "Dave Matthews Band",
          title: "Two",
          config: "eSingle",
          format: "Audio",
          upc: "0000123456789",
          genre: "Rock",
          pa: "N/A",
          componentCount: "1",
          trackCount: "1",
          productionContact: "Hannah Rosen",
          recordChecks: [
            {
              title: "Label Copy",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Rights",
              status: "Incomplete",
              boxBg: "#FFB4AB",
            },
            {
              title: "Atwork",
              status: "Incomplete",
              boxBg: "#FFB4AB",
            },
            {
              title: "Playable Media",
              status: "Incomplete",
              boxBg: "#FFB4AB",
            },
            {
              title: "Delivery Status",
              status: "Not Delivered",
              boxBg: "#FFB4AB",
            },
          ],
        },
        {
          day: "Wednesday",
          dayBG: "#EFDCFF",
          releaseDate: "04-Oct-23",
          preReleasedDate: "04-Sept-2023",
          artist: "Dave Matthews Band",
          title: "Three",
          config: "eAlbum Audio",
          format: "Audio",
          upc: "0000123456789",
          genre: "Rock",
          pa: "N/A",
          componentCount: "1",
          trackCount: "1",
          productionContact: "Hannah Rosen",
          recordChecks: [
            {
              title: "Label Copy",
              status: "Incomplete",
              boxBg: "#FFB4AB",
            },
            {
              title: "Rights",
              status: "Incomplete",
              boxBg: "#FFB4AB",
            },
            {
              title: "Atwork",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Playable Media",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Delivery Status",
              status: "Not Delivered",
              boxBg: "#FFB4AB",
            },
          ],
        },
        {
          day: "Thursday",
          dayBG: "#DEEA5C",
          releaseDate: "12-Oct-23",
          artist: "Dave Matthews Band",
          title: "Finished",
          config: "Vinyl Album 12",
          format: "Vinyl Album",
          upc: "0000123456789",
          genre: "Rock",
          pa: "N/A",
          componentCount: "1",
          trackCount: "1",
          productionContact: "Hannah Rosen",
          recordChecks: [
            {
              title: "Label Copy",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Rights",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Atwork",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Playable Media",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
          ],
        },
        {
          day: "Friday",
          dayBG: "#EFDCFF",
          releaseDate: "13-Oct-23",
          artist: "Dave Matthews Band",
          title: "Finished",
          config: 'Vinyl Album 12"',
          format: "Audio-Vinyl",
          upc: "0000123456789",
          genre: "Rock",
          pa: "N/A",
          componentCount: "1",
          trackCount: "1",
          productionContact: "Hannah Rosen",
          recordChecks: [
            {
              title: "Label Copy",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Rights",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Atwork",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Playable Media",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
          ],
        },
      ],
    },

    {
      id: 3,
      ProjectId: "0033-33300",
      detailedViewName: "Dave Matthews Band",
      detailedViewStatus: "Finished",
      detailedViewSecondaryName: "Island Records",
      projectData: [
        {
          day: "Monday",
          dayBG: "#EFDCFF",
          releaseDate: "18-Sept-23",
          artist: "Dave Matthews Band",
          title: "One",
          config: "eSingle",
          format: "Audio",
          upc: "0000123456789",
          genre: "Rock",
          pa: "N/A",
          componentCount: "1",
          trackCount: "1",
          productionContact: "Hannah Rosen",
          recordChecks: [
            {
              title: "Label Copy",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Rights",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Atwork",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Playable Media",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Delivery Status",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
          ],
        },
        {
          day: "Tuesday",
          dayBG: "#FA9CE0",
          releaseDate: "26-Sept-23",
          artist: "Dave Matthews Band",
          title: "Two",
          config: "eSingle",
          format: "Audio",
          upc: "0000123456789",
          genre: "Rock",
          pa: "N/A",
          componentCount: "1",
          trackCount: "1",
          productionContact: "Hannah Rosen",
          recordChecks: [
            {
              title: "Label Copy",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Rights",
              status: "Incomplete",
              boxBg: "#FFB4AB",
            },
            {
              title: "Atwork",
              status: "Incomplete",
              boxBg: "#FFB4AB",
            },
            {
              title: "Playable Media",
              status: "Incomplete",
              boxBg: "#FFB4AB",
            },
            {
              title: "Delivery Status",
              status: "Not Delivered",
              boxBg: "#FFB4AB",
            },
          ],
        },
        {
          day: "Wednesday",
          dayBG: "#EFDCFF",
          releaseDate: "04-Oct-23",
          preReleasedDate: "04-Sept-2023",
          artist: "Dave Matthews Band",
          title: "Three",
          config: "eAlbum Audio",
          format: "Audio",
          upc: "0000123456789",
          genre: "Rock",
          pa: "N/A",
          componentCount: "1",
          trackCount: "1",
          productionContact: "Hannah Rosen",
          recordChecks: [
            {
              title: "Label Copy",
              status: "Incomplete",
              boxBg: "#FFB4AB",
            },
            {
              title: "Rights",
              status: "Incomplete",
              boxBg: "#FFB4AB",
            },
            {
              title: "Atwork",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Playable Media",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Delivery Status",
              status: "Not Delivered",
              boxBg: "#FFB4AB",
            },
          ],
        },
        {
          day: "Thursday",
          dayBG: "#DEEA5C",
          releaseDate: "12-Oct-23",
          artist: "Dave Matthews Band",
          title: "Finished",
          config: "Vinyl Album 12",
          format: "Vinyl Album",
          upc: "0000123456789",
          genre: "Rock",
          pa: "N/A",
          componentCount: "1",
          trackCount: "1",
          productionContact: "Hannah Rosen",
          recordChecks: [
            {
              title: "Label Copy",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Rights",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Atwork",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Playable Media",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
          ],
        },
        {
          day: "Friday",
          dayBG: "#EFDCFF",
          releaseDate: "13-Oct-23",
          artist: "Dave Matthews Band",
          title: "Finished",
          config: 'Vinyl Album 12"',
          format: "Audio-Vinyl",
          upc: "0000123456789",
          genre: "Rock",
          pa: "N/A",
          componentCount: "1",
          trackCount: "1",
          productionContact: "Hannah Rosen",
          recordChecks: [
            {
              title: "Label Copy",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Rights",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Atwork",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Playable Media",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
          ],
        },
      ],
    },

    {
      id: 4,
      ProjectId: "0044-44400",
      detailedViewName: "Dave Matthews Band",
      detailedViewStatus: "Finished",
      detailedViewSecondaryName: "Island Records",
      projectData: [
        {
          day: "Monday",
          dayBG: "#EFDCFF",
          releaseDate: "18-Sept-23",
          artist: "Dave Matthews Band",
          title: "One",
          config: "eSingle",
          format: "Audio",
          upc: "0000123456789",
          genre: "Rock",
          pa: "N/A",
          componentCount: "1",
          trackCount: "1",
          productionContact: "Hannah Rosen",
          recordChecks: [
            {
              title: "Label Copy",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Rights",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Atwork",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Playable Media",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Delivery Status",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
          ],
        },
        {
          day: "Tuesday",
          dayBG: "#FA9CE0",
          releaseDate: "26-Sept-23",
          artist: "Dave Matthews Band",
          title: "Two",
          config: "eSingle",
          format: "Audio",
          upc: "0000123456789",
          genre: "Rock",
          pa: "N/A",
          componentCount: "1",
          trackCount: "1",
          productionContact: "Hannah Rosen",
          recordChecks: [
            {
              title: "Label Copy",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Rights",
              status: "Incomplete",
              boxBg: "#FFB4AB",
            },
            {
              title: "Atwork",
              status: "Incomplete",
              boxBg: "#FFB4AB",
            },
            {
              title: "Playable Media",
              status: "Incomplete",
              boxBg: "#FFB4AB",
            },
            {
              title: "Delivery Status",
              status: "Not Delivered",
              boxBg: "#FFB4AB",
            },
          ],
        },
        {
          day: "Wednesday",
          dayBG: "#EFDCFF",
          releaseDate: "04-Oct-23",
          preReleasedDate: "04-Sept-2023",
          artist: "Dave Matthews Band",
          title: "Three",
          config: "eAlbum Audio",
          format: "Audio",
          upc: "0000123456789",
          genre: "Rock",
          pa: "N/A",
          componentCount: "1",
          trackCount: "1",
          productionContact: "Hannah Rosen",
          recordChecks: [
            {
              title: "Label Copy",
              status: "Incomplete",
              boxBg: "#FFB4AB",
            },
            {
              title: "Rights",
              status: "Incomplete",
              boxBg: "#FFB4AB",
            },
            {
              title: "Atwork",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Playable Media",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Delivery Status",
              status: "Not Delivered",
              boxBg: "#FFB4AB",
            },
          ],
        },
        {
          day: "Thursday",
          dayBG: "#DEEA5C",
          releaseDate: "12-Oct-23",
          artist: "Dave Matthews Band",
          title: "Finished",
          config: "Vinyl Album 12",
          format: "Vinyl Album",
          upc: "0000123456789",
          genre: "Rock",
          pa: "N/A",
          componentCount: "1",
          trackCount: "1",
          productionContact: "Hannah Rosen",
          recordChecks: [
            {
              title: "Label Copy",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Rights",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Atwork",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Playable Media",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
          ],
        },
        {
          day: "Friday",
          dayBG: "#EFDCFF",
          releaseDate: "13-Oct-23",
          artist: "Dave Matthews Band",
          title: "Finished",
          config: 'Vinyl Album 12"',
          format: "Audio-Vinyl",
          upc: "0000123456789",
          genre: "Rock",
          pa: "N/A",
          componentCount: "1",
          trackCount: "1",
          productionContact: "Hannah Rosen",
          recordChecks: [
            {
              title: "Label Copy",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Rights",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Atwork",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
            {
              title: "Playable Media",
              status: "Complete",
              boxBg: "#AAF5A4",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      {projectsData?.map((item) => {
        return <SingleProject item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ListContentWrapper;
