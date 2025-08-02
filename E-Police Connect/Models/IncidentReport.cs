using System;
using System.Collections.Generic;

namespace E_Police_Connect.Models;

public partial class IncidentReport
{
    public int ReportId { get; set; }

    public int OfficerId { get; set; }

    public string Location { get; set; } = null!;

    public string Description { get; set; } = null!;

    public DateOnly ReportDate { get; set; }

    public virtual Officer Officer { get; set; } = null!;
}
