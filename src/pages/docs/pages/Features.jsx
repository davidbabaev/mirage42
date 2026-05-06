import React from 'react'
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CardDocs from '../components/CardDocs';

export default function Features() {

  const authentication = [
    {text: 'Email/password registration with full profile setup (name, country, city, job, gender, birth date, phone, about me)'},
    {text: 'Email/password login'},
    {text: 'Google OAuth — sign in or register with a Google account'},
    {text: 'JWT-based session (token stored in localStorage)'},
    {text: 'Birth date enforcement: must be 13 or older'},
    {text: 'Phone validation (10-digit limit)'},
  ];
  
  const publicProfile = [
    {label: 'Posts' ,text: 'all posts the user has published, sorted newest first'},
    {label: 'About' ,text: 'bio, job, location, age, gender, birth date, join date'},
    {label: 'Media' ,text: 'grid view of all media (images/videos) the user has posted'},
    {label: 'Followers' ,text: 'users who follow this person'},
    {label: 'Following' ,text: 'users this person follows'},
    {label: 'Mutual friends' ,text: 'users that both you and this person follow (on profile sidebar)'},
    {label: 'Make new friends' ,text: 'users this person follows that you dont yet (suggestions)'},
    {label: 'Follow/ unfollow' ,text: 'action'},
    {label: 'Save to favorites' ,text: '(private — only you see your favorites)'},
    {label: 'Message' ,text: 'jumps to chat with this user'},
  ];

  const feed = [
    {label: 'Following feed' ,text: 'posts from people you follow, sorted by recency'},
    {label: 'Profile sidbar' ,text: 'your avatar, name, job, location, follower/following/post counts, quick links'},
    {label: 'People you may know' ,text: 'suggested users (friends-of-friends) with one-click follow'},
    {label: 'Create post trigger' ,text: 'start a new post directly from the feed'},
  ];

  const createPost = [
    {text: 'Pick a single media file (image or video, your choice — Cloudinary handles upload)'},
    {text: 'Optional title'},
    {text: 'Pick category from a curated list (50+ options)'},
    {text: 'Body text with emoji picker'},
    {text: 'Optional external URL link'},
    {text: 'Live preview of media before posting'},
  ];

  const allUsers = [
    {text: 'Search by name (debounced)'},
    {text: 'Filter by country (with per-country user counts)'},
    {text: 'Sort by age (youngest / oldest)'},
    {text: 'Sort by name (A → Z, Z → A)'},
    {text: 'Filter by gender'},
    {text: 'Save user to favorites directly from the grid card'},
    {text: 'Follow/unfollow directly from the grid card'},
    {text: 'Load more pagination'},
    {text: 'Mobile: filter panel as full-screen drawer'},
  ];

  const postInteractions = [
    {label: 'Like / unlike',text: 'overlapping avatars show who liked it'},
    {label: 'Save / unsave',text: 'to your favorites'},
    {label: 'Comment',text: "add comments, see all comments with the commenter's avatar and quick-follow button"},
    {label: 'Delete comment',text: "your own comments, or any comment on a post you authored, or any comment if you're admin"},
    {label: 'Read more/ show less',text: 'for long post text (collapsed at 150 characters)'},
    {label: 'Visit link',text: 'button if the post has a URL attached'},
    {label: 'Click to expand',text: 'opens a full-screen modal showing the post in detail with media, full text, comments thread, and full action set'},
    {label: 'Click avatar/ name',text: "anywhere → navigate to that user's profile"},
  ];

  const realTimeChat = [
    {text: 'WebSocket-based — messages arrive instantly without refresh'},
    {text: 'One conversation per user pair (no duplicates)'},
    {text: 'Send text messages'},
    {text: 'Send images and videos through the chat (uploaded to Cloudinary, persisted to MongoDB)'},
    {text: 'Emoji picker in the message input'},
    {text: 'Delete a conversation — deletes for both participants and broadcasts the removal to the other user in real time'},
    {text: 'Conversation list sorted by most recent activity'},
    {text: 'Mobile: WhatsApp-style layout — conversation list collapses when a chat is open; back arrow returns to the list'},
  ];

  const notifications = [
    {text: 'Real-time notifications on: follows, likes, comments'},
    {text: 'Unread badge count on the navbar bell icon'},
    {text: 'Auto-marked as read when the dropdown opens'},
    {text: 'Delete individual notifications'},
    {text: "Click a notification to jump to the actor's profile"},
  ];

  const theme = [
    {text: 'Light mode / dark mode toggle'},
    {text: 'Persists across the entire app (MUI theming)'},
  ];

  const overviewDashboard = [
    {label: 'Headline stats', text: 'total users, total posts, total likes, total comments, average engagement per post'},
    {label: 'User registration over time', text: 'area chart by month'},
    {label: 'Logged in this month', text: 'count + sparkline of daily activity'},
    {label: 'Retention metrics', text: 'logged in today vs yesterday (with growth %), registered this week vs last week, weekly active users vs previous week, retention rate (registered last week and active this week)'},
    {label: 'Most popular', text: 'most active user, most-liked post'},
    {label: 'Last 5 joined users', text: 'with follow buttons'},
    {label: 'Top 10 active users', text: 'horizontal bar chart by post count'},
    {label: 'Users by country', text: 'list with flags and percentage bars'},
    {label: 'Gender distribution', text: 'donut chart with totals'},
    {label: 'Gender by age range', text: 'stacked bar chart (Male/Female across age buckets)'},
    {label: 'Top 10 categories', text: 'donut chart'},
    {label: 'Posts per category', text: 'expandable list with counts'},
    {label: 'Top 5 posts', text: 'by likes + comments engagement'},
    {label: 'Last 5 posts', text: 'most recently published'},
  ];

  const usersTable = [
    {text: 'Pagination (page size: 10 / 25 / 50 / 100)'},
    {text: 'Search by name'},
    {text: 'Filter by gender, country, role (admin / regular)'},
    {text: 'Sort by age (low → high or reverse)'},
    {text: 'Sort by name (A → Z or reverse)'},
    {text: 'Sortable columns: joined date, post count, follower count'},
    {text: 'Each row shows: avatar, full name, email, last login, country flag, joined date, posts, followers, role badge, status badge (active / banned)'},
    {label: 'Ban / unban', text: 'action'},
    {label: 'Promote/ demote', text: 'to admin (admins can grant admin to anyone)'},
    {label: 'Delete user', text: "cascades and removes all of that user's content (posts, comments, likes, follows, chats, notifications)"},
  ];

  const postsTable = [
    {text: 'Pagination (page size: 10 / 25 / 50 / 100)'},
    {text: 'Search by title'},
    {text: 'Filter by creator, category, "my favorites"'},
    {text: 'Sortable columns: created date, likes count, category, creator name'},
    {text: 'Each row: thumbnail, creator info, title, category, created date, likes, comments, status badge (active / banned)'},
    {label: 'Ban / unban', text: 'action — banned posts are hidden from non-admin views'},
    {label: 'Delete post ', text: 'cascades and removes the post, its likes, comments, and any related notifications'},
    {label: 'Click row → preview post in a full modal'},
  ];

  const uxAndPolish = [
    {text: 'Skeleton loaders during async data fetches'},
    {text: 'Confirmation dialogs before destructive actions (delete user, delete post, etc.)'},
    {text: 'Login popup nudges guests to sign up when they try to interact'},
    {text: '404 page for unmatched routes'},
    {text: 'Mobile-responsive layouts across every page'},
    {text: 'Fixed top navbar on desktop, fixed bottom navbar on mobile'},
    {text: 'Auto-hiding mobile bottom bar on scroll'},
    {text: 'Rotate-to-portrait overlay for landscape phones (mobile is portrait-first)'},
  ];

  const privateDashboard = [
    {label: 'Profile', text: 'view your own info; edit any field (name, last name, country, city, job, gender, birth date, phone, about me, profile picture, banner image). Country and city are cascading dropdowns powered by a country/cities API'},
    {label: 'My posts', text: 'all your posts; edit any field on any post (title, category, text, URL, media), or delete the post'},,
    {label: 'Favorite users', text: 'users you saved (private to you)'},
    {label: 'Favorite posts', text: 'posts you saved (private to you)'},
    {text: 'Profile completeness alert — banner that nudges you to fill in missing fields'},
  ];


  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Box sx={{display:'flex', gap: 5, flexWrap: 'wrap'}}>
        <CardDocs
          title={'Authentication'}
          text={authentication.text}
          array={authentication}
        />

        <CardDocs
          title={'Public Profile'}
          label={publicProfile.label}
          text={publicProfile.text}
          array={publicProfile}
        />

        <CardDocs
          title={'Feed'}
          label={feed.label}
          text={feed.text}
          array={feed}
        />

        <CardDocs
          title={'Create post'}
          text={createPost.text}
          array={createPost}
        />

        <CardDocs
          title={'Private dashboard'}
          label={privateDashboard.label}
          text={privateDashboard.text}
          array={privateDashboard}
        />

        <CardDocs
          title={'All users (/allusers)'}
          text={allUsers.text}
          array={allUsers}
        />

        <CardDocs
          title={'Post interactions'}
          label={postInteractions.label}
          text={postInteractions.text}
          array={postInteractions}
        />

        <CardDocs
          title={'Real-time chat (Socket.IO)'}
          text={realTimeChat.text}
          array={realTimeChat}
        />

        <CardDocs
          title={'Notifications'}
          text={notifications.text}
          array={notifications}
        />

        <CardDocs
          title={'Theming'}
          text={theme.text}
          array={theme}
        />

        <CardDocs
          title={'UX & pulish'}
          text={uxAndPolish.text}
          array={uxAndPolish}
        />
      </Box>

      <Divider sx={{my: 3}}/>
      <Typography pb={3} fontSize={20} fontWeight={700}>Admin panel (admin-only)</Typography>

      <Box sx={{display:'flex', gap: 5, flexWrap: 'wrap'}}>
        <CardDocs
          title={'Overview dashboard'}
          label={overviewDashboard.label}
          text={overviewDashboard.text}
          array={overviewDashboard}
        />
        <CardDocs
          title={'Users table'}
          label={usersTable.label}
          text={usersTable.text}
          array={usersTable}
        />
        <CardDocs
          title={'Post table'}
          label={postsTable.label}
          text={postsTable.text}
          array={postsTable}
        />
      </Box>
    </Box>
  )
}
