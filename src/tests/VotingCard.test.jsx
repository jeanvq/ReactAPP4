// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import VotingCard from '../components/VotingCard'

const mockVote = vi.fn()

vi.mock('../context/VoteContext', () => ({
  useVote: () => ({
    vote: mockVote,
  }),
}))

afterEach(() => {
  cleanup()
  mockVote.mockClear()
})

const mockTeam = {
  id: 'arsenal',
  name: 'Arsenal',
  badge: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
  votes: 42,
}

describe('VotingCard', () => {
 it('renders the team name', () => {
    render(<VotingCard team={mockTeam} />)
    expect(screen.getByText('Arsenal')).toBeInTheDocument()
  })

  it('renders the vote count', () => {
    render(<VotingCard team={mockTeam} />)
    expect(screen.getByText('42 votes')).toBeInTheDocument()
  })

  it('renders the vote button', () => {
    render(<VotingCard team={mockTeam} />)
    expect(screen.getByRole('button', { name: /vote/i })).toBeInTheDocument()
  })

  it('calls vote when button is clicked', () => {
    render(<VotingCard team={mockTeam} />)
    fireEvent.click(screen.getByRole('button', { name: /vote/i }))
    expect(mockVote).toHaveBeenCalledWith('arsenal')
  })

  it('renders the team badge', () => {
    render(<VotingCard team={mockTeam} />)
    const img = screen.getByAltText('Arsenal')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', mockTeam.badge)
  })
})