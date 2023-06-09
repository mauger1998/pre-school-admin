export default {
  name: 'teamMembers',
  type: 'document',
  title: 'Team Members',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'favouriteFood',
      type: 'string',
      title: 'Favourite Food',
    },
    {
      name: 'favouriteColour',
      type: 'string',
      title: 'Favourite Colour',
    },
    {
      name: 'pet',
      type: 'string',
      title: 'Pet',
    },
    {
      name: 'text',
      type: 'text',
      title: 'Text',
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Photo',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
    },
  ],
}
