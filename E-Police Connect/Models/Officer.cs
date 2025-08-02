using System;
using System.Collections.Generic;

namespace E_Police_Connect.Models;

public partial class Officer
{
    public int OfficerId { get; set; }

    public string Name { get; set; } = null!;

    public string Rank { get; set; } = null!;

    public string? Email { get; set; }

    public string Phone { get; set; } = null!;

    public string Password { get; set; } = null!;

    public bool IsDesignated { get; set; }

    public virtual ICollection<Criminal> Criminals { get; set; } = new List<Criminal>();

    public virtual ICollection<IncidentReport> IncidentReports { get; set; } = new List<IncidentReport>();
}
